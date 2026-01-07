from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Founder Vox API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Founder Vox API"}

@app.get("/api/pricing")
async def get_pricing():
    return {
        "plans": [
            {
                "name": "Starter",
                "price": "Free",
                "description": "All essential features to get started.",
                "features": [
                    "5 voice notes per day",
                    "Basic AI categorization",
                    "Email formatting",
                    "Single language support",
                    "7-day note history"
                ],
                "cta": "Get Started Free",
                "popular": False
            },
            {
                "name": "Pro",
                "price": "$19",
                "period": "/ month",
                "description": "Unlimited access for power users.",
                "features": [
                    "Unlimited voice notes",
                    "Advanced AI categorization",
                    "All format types (email, social, prompts)",
                    "Multi-language support (12+ languages)",
                    "Unlimited note history",
                    "Task assignment & collaboration",
                    "Priority support"
                ],
                "cta": "Start Pro Trial",
                "popular": True
            },
            {
                "name": "Team",
                "price": "$49",
                "period": "/ month",
                "description": "For teams that move fast together.",
                "features": [
                    "Everything in Pro",
                    "Unlimited team members",
                    "Shared workspaces",
                    "Team analytics & insights",
                    "Admin controls",
                    "API access",
                    "Dedicated support"
                ],
                "cta": "Contact Sales",
                "popular": False
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
