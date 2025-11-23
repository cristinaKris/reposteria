FROM python:3.10-slim

WORKDIR /app

# Instalar dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código
COPY . .

# Puerto donde correrá gunicorn
EXPOSE 5000

# Gunicorn levanta la app definida en wsgi.py -> variable app
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
