from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MYSQL_DB_HOST: str
    MYSQL_DB_USER: str
    MYSQL_DB_PASSWD: str
    MYSQL_DB_DATABASE: str

    class Config:
        env_file = "../../.env"

settings = Settings()


