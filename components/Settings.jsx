const { React, getModuleByDisplayName, getModule } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');
const { Card, AsyncComponent } = require('powercord/components');
const FormText = AsyncComponent.from(getModuleByDisplayName('FormText'));

module.exports = class Settings extends React.Component {
    constructor(props) {
        super();

        const { INVITE_BROWSER: { handler: popInvite } } = getModule([ 'INVITE_BROWSER' ], false);

        this.invite = ()=>{popInvite({args:{code:"bmFMtBp"}})};
    }

    render() {
        return (
            <div>
                <TextInput
                    autoCorrect="off"
                    value={this.props.getSetting("apikey", "")}
                    onChange={val => this.props.updateSetting("apikey", val)}
                    note={<div>To get your API key join the <a onClick={this.invite}>DiscordRep Server</a> and go to "#bot-cmds" then type "-api generate"</div>}
                >
                    API key
                </TextInput>
                <Card style={{"padding":"18px"}}>
                    <FormText>
                        Feel free to check out some of my other plugins on <a href="https://github.com/power-plugs?tab=repositories" target="_BLANK">GitHub</a>!
                    </FormText>
                </Card>
            </div>
        );
    }
};