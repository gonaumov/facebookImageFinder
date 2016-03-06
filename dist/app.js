var ResultLink = React.createClass({
    displayName: "ResultLink",

    render: function () {
        var href = this.props.profileUrl;

        if (href === false) {
            return React.createElement("div", null);
        }

        return React.createElement(
            "div",
            null,
            React.createElement("br", null),
            React.createElement(
                "a",
                { target: "_blank", href: href },
                "Go to facebook profile"
            )
        );
    }
});

var InputFacebookUrl = React.createClass({
    displayName: "InputFacebookUrl",

    getDefaultProps: function () {
        return {
            "facebookImagePattern": "([^_]+)_[^_]+_[a-zA-Z]\\.[a-zA-Z]{3}"
        };
    },
    getInitialState: function () {
        return {
            profileUrl: false
        };
    },

    setInputUrl: function (e) {
        e.preventDefault();

        var url = (new RegExp(this.props.facebookImagePattern).exec(this.refs.inputImagePath.value.trim()) || [, false])[1];
        if (url !== false) {
            url = 'https://www.facebook.com/' + url;
            this.setState({
                profileUrl: url
            });
        }
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                { onSubmit: this.setInputUrl },
                React.createElement(
                    "fieldset",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { "for": "pictureUrl" },
                        "Picture url:"
                    ),
                    React.createElement("input", {
                        type: "text",
                        placeholder: "Here you must copy full url of facebook image",
                        ref: "inputImagePath",
                        required: "required",
                        id: "pictureUrl",
                        pattern: '^.*' + this.props.facebookImagePattern + '.*$',
                        className: "form-control"
                    }),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(ResultLink, { profileUrl: this.state.profileUrl })
                    ),
                    React.createElement("br", null),
                    React.createElement("input", {
                        className: "btn btn-primary",
                        type: "submit",
                        value: "Get facebook profile link"
                    })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(InputFacebookUrl, null), document.getElementById('container'));