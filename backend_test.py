import requests
import sys
import os
from datetime import datetime

class FounderVoxAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, expected_data_keys=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Check response data if expected keys provided
                if expected_data_keys:
                    try:
                        data = response.json()
                        for key in expected_data_keys:
                            if key not in data:
                                print(f"⚠️  Warning: Expected key '{key}' not found in response")
                            else:
                                print(f"   ✓ Found expected key: {key}")
                        return True, data
                    except Exception as e:
                        print(f"⚠️  Warning: Could not parse JSON response: {e}")
                        return True, {}
                return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                return False, {}

        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection Error: Could not connect to {url}")
            print("   Make sure the backend server is running")
            return False, {}
        except requests.exceptions.Timeout:
            print(f"❌ Failed - Timeout: Request took too long")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200,
            expected_data_keys=["status", "service"]
        )
        if success and response:
            print(f"   Service: {response.get('service', 'Unknown')}")
            print(f"   Status: {response.get('status', 'Unknown')}")
        return success

    def test_pricing_endpoint(self):
        """Test pricing endpoint"""
        success, response = self.run_test(
            "Pricing Data",
            "GET",
            "api/pricing",
            200,
            expected_data_keys=["plans"]
        )
        if success and response:
            plans = response.get('plans', [])
            print(f"   Found {len(plans)} pricing plans")
            for i, plan in enumerate(plans):
                print(f"   Plan {i+1}: {plan.get('name', 'Unknown')} - {plan.get('price', 'Unknown')}")
                if plan.get('popular'):
                    print(f"     ⭐ Most Popular Plan")
        return success

def main():
    print("🚀 Starting Founder Vox Backend API Tests")
    print("=" * 50)
    
    # Setup
    tester = FounderVoxAPITester("http://localhost:8001")
    
    # Run tests
    print("\n📡 Testing Backend API Endpoints...")
    
    # Test health endpoint
    health_success = tester.test_health_endpoint()
    
    # Test pricing endpoint  
    pricing_success = tester.test_pricing_endpoint()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend tests passed!")
        return 0
    else:
        print("❌ Some backend tests failed")
        print("   Make sure the backend server is running on port 8001")
        print("   Check supervisor logs: tail -n 100 /var/log/supervisor/backend.*.log")
        return 1

if __name__ == "__main__":
    sys.exit(main())