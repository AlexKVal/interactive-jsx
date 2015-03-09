// var React = require('react');

var Convertor = React.createClass({

  render: function() {
    return (
      <div className="convertor">
        <div className="error bg-danger">&nbsp; text of error </div>

        <div className="container-fluid">
          <div className="row well">
            <div className="jsx-code col-md-6"><textarea className="form-control" name="jsx" rows="20"></textarea></div>
            <div className="js-code col-md-6"><textarea className="form-control" name="js" rows="20"></textarea></div>
          </div>
        </div>
      </div>
    );
  }

});


React.render(<Convertor />, document.body);
