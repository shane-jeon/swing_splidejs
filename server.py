from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def livepage():
  """SplideJS example page."""
  return render_template('index.html')

if __name__ == '__main__':
  app.run(debug=True)