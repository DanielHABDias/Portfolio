import smtplib
import os
from dotenv import load_dotenv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

def send_email(name: str, email: str, message: str):
    recipient = os.environ.get("EMAIL")  

    msg = MIMEMultipart()
    msg["From"] = recipient 
    msg["To"] = recipient
    msg["Subject"] = "Mensagem de contato do portfólio"

    body = f"Nome: {name}\nEmail: {email}\n\nMensagem:\n{message}"
    msg.attach(MIMEText(body, "plain"))

    text = msg.as_string()

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(recipient, os.environ.get("PASSWORD")) 
        server.sendmail(recipient, recipient, text)
        server.quit()
        print("✅ Email enviado com sucesso!")
    except Exception as e:
        print(f"❌ Erro ao enviar email: {e}")


if __name__ == "__main__":
    send_email("Recrutador Paulo", "Recrutador@example.com", "Ola, tudo bem? Gostaria de saber mais sobre seus projetos.")