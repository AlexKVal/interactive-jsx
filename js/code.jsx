// var React = require('react');

var Convertor = React.createClass({
  getInitialState: function() {
    return {
      input: '/* jsx code here */',
      output: 'here we have output code',
      err: ''
    };
  },
  update: function (event) {
    var jxsCode = event.target.value;
    try {
      this.setState({
        output: JSXTransformer.transform(jxsCode).code
      });
    } catch (error) {
      this.setState({
        err: error.message
      });
    }
  },
  render: function() {
    return (
      <div className="convertor">
        <div className="error bg-danger">&nbsp; text of error </div>

        <div className="container-fluid">
          <div className="row well">
            <div className="jsx-code col-md-6">
              <textarea defaultValue={this.state.input} className="form-control" name="jsx" rows="20"></textarea>
            </div>
            <div className="js-code col-md-6">
              <textarea value={this.state.output} readOnly className="form-control" name="js" rows="20"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
});



React.render(<Convertor />, document.body);
