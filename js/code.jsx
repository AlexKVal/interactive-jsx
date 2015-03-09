// var React = require('react');
var initialOutputText = '...code after JSXTransform';

var Convertor = React.createClass({
  getInitialState: function() {
    return {
      input: '',
      output: initialOutputText,
      err: ''
    };
  },
  update: function (event) {
    var jxsCode = event.target.value;
    if (jxsCode === '') {
      this.setState({
        output: initialOutputText
      });
    } else {
      try {
        this.setState({
          output: JSXTransformer.transform(jxsCode).code,
          err: ''
        });
      } catch (error) {
        this.setState({
          err: error.message
        });
      }
    }
  },
  render: function() {
    return (
      <div className="convertor">
        <div className="row">
          <p className="alert alert-danger"> &nbsp; {this.state.err} </p>
        </div>

        <div className="container-fluid">
          <div className="row">
            <textarea
              defaultValue={this.state.input}
              onChange={this.update}
              placeholder="JSX code here..."
              className="input-lg col-md-6">
            </textarea>
            <pre className="input-lg col-md-6">{this.state.output}</pre>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Convertor />, document.body);
