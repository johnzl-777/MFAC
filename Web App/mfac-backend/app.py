# import Flask 
from flask import Flask, request, jsonify, render_template
import pickle

# # pickle the python file
# filename = 'fmnist_interactive_umap_demo'
# outfile = open(filename,'wb')


# create an instance of Flask
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('myfig.html')
    # return render_template('index2.html')

if __name__ == '__main__':
    app.run(debug=True)