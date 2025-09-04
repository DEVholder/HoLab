from fastapi import FastAPI
from app.api.v1.router import api_router as api_router_v1

app = FastAPI(
    title="HoLab",
    description="홈서버 마이크로서비스 허브를 위한 API입니다.",
    version="0.0.1"
)

app.include_router(api_router_v1, prefix="/api/v1")

@app.get("/")
def read_root():
    """
    서버의 루트 URL로 접속했을 때 간단한 환영 메시지를 반환합니다.
    """
    return {"message": "Hello, HoLab! Welcome to FastAPI."}

