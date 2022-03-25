from flask import Flask, render_template, jsonify

app = Flask('app')
app.config["JSON_AS_ASCII"] = False
import json
#import datubaze


@app.route('/')
def burtuspeele():
    return render_template("burtuspeele.html")


@app.route('/speele')
def speele():
    return render_template("speele.html")


@app.route('/noteikumi')
def noteikumi():
    return render_template("noteikumi.html")


@app.route('/veidotaaji')
def veidotaaji():
    return render_template("veidotaaji.html")


@app.route('/top/labaakais')
def labaakais():
  with open('dati/labaakais', 'r', encoding='utf-8') as f:
    rezultaats=f.read()
  return rezultaats

@app.route('/top/rekords/<jaunais>')
def rekords(jaunais):
  with open('dati/labaakais', 'r', encoding='utf-8') as f:
    top=int(f.read())

  if int(jaunais)>top:
    with open('dati/labaakais', 'w', encoding='utf-8') as f:
      f.write(jaunais)
    return jaunais
  else:
    return top



@app.route('/top/rezultaati')
def top_rezultaati():
  with open('static/dati/top.json', 'r', encoding='utf-8') as f:
    dati=json.loads(f.read())
  return jsonify(dati)

'''@app.route('/speeles/<speele>')
def speeles(speele):
  datne=speele+".html"
  return render_template(datne)'''

app.run(host='0.0.0.0', port=8080)
