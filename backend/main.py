from fastapi import FastAPI

app = FastAPI(title="wonlab-api", version="0.1.0")


@app.get("/api/")
async def health():
    return {"status": "ok", "service": "wonlab-api"}
