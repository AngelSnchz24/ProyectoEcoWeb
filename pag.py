from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/acciones")
def acciones():
    return render_template("acciones.html")

@app.route("/3r")
def tres_r():
    return render_template("3r.html")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route("/clasificacion")
def clasificacion():
    return render_template("clasificacion.html")

@app.route("/reciclaje")
def reciclaje():
    return render_template("reciclaje.html")

@app.route("/conciencia")
def conciencia():
    return render_template("conciencia.html")

@app.route("/educacion")
def educacion():
    return render_template("educacion.html")

@app.route("/estadisticas")
def estadisticas():
    return render_template("estadisticas.html")

if __name__ == "__main__":
    app.run(debug=True)
