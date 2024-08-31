from flask import render_template
from app import app

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/checkout/')
def checkout():
    return render_template('checkout.html')

@app.route('/thank-u/<client_name>/')
def thank_u(client_name):
    return render_template('thank-u.html', client_name=client_name)
