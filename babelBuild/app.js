var ResultLink=React.createClass({displayName:"ResultLink",render:function(){var e=this.props.profileUrl;return e===!1?React.createElement("div",null):React.createElement("div",null,React.createElement("br",null),React.createElement("a",{target:"_blank",href:e},"Go to facebook profile"))}}),InputFacebookUrl=React.createClass({displayName:"InputFacebookUrl",getDefaultProps:function(){return{facebookImagePattern:"([^_]+)_[^_]+_[a-zA-Z]\\.[a-zA-Z]{3}"}},getInitialState:function(){return{profileUrl:!1}},setInputUrl:function(e){e.preventDefault();var t=(new RegExp(this.props.facebookImagePattern).exec(this.refs.inputImagePath.value.trim())||[,!1])[1];t!==!1&&(t="https://www.facebook.com/"+t,this.setState({profileUrl:t}))},render:function(){return React.createElement("div",null,React.createElement("form",{onSubmit:this.setInputUrl},React.createElement("fieldset",{className:"form-group"},React.createElement("label",{"for":"pictureUrl"},"Picture url:"),React.createElement("input",{type:"text",placeholder:"Here you must copy full url of facebook image",ref:"inputImagePath",required:"required",id:"pictureUrl",pattern:"^.*"+this.props.facebookImagePattern+".*$",className:"form-control"}),React.createElement("div",null,React.createElement(ResultLink,{profileUrl:this.state.profileUrl})),React.createElement("br",null),React.createElement("input",{className:"btn btn-primary",type:"submit",value:"Get facebook profile link"}))))}});ReactDOM.render(React.createElement(InputFacebookUrl,null),document.getElementById("container"));