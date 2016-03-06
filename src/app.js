var ResultLink = React.createClass({
    render: function () {
        var href = this.props.profileUrl;

        if (href === false) {
            return (
                <div></div>
            );
        }


        return (
            <div>
                <br/>
                <a target="_blank" href={href}>
                    Go to facebook profile
                </a>
            </div>
        );
    }
});

var InputFacebookUrl = React.createClass({
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

        var url = ((new RegExp(this.props.facebookImagePattern)).exec(this.refs.inputImagePath.value.trim()) || [, false])[1];
        if (url !== false) {
            url = 'https://www.facebook.com/' + url;
            this.setState({
                profileUrl: url
            });
        }
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.setInputUrl}>
                    <fieldset className="form-group">
                        <label for="pictureUrl">Picture url:</label>
                        <input
                            type="text"
                            placeholder="Here you must copy full url of facebook image"
                            ref="inputImagePath"
                            required="required"
                            id="pictureUrl"
                            pattern={'^.*' + this.props.facebookImagePattern + '.*$'}
                            className="form-control"
                        />
                        <div>
                            <ResultLink profileUrl={this.state.profileUrl}/>
                        </div>
                        <br/>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Get facebook profile link"
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <InputFacebookUrl />,
    document.getElementById('container')
);
