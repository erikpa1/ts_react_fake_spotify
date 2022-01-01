import * as React from "react"
import * as bs from "react-bootstrap"

import "./LeftNavPanel.css"
import {IconTextButton} from "./IconTextButton";
import {Nav} from "react-bootstrap";

class NavModule {
    icon = ""
    lang = ""
    route = ""

    constructor(icon: string, lang: string, route: string) {
        this.icon = icon
        this.lang = lang
        this.route = route
    }
}


const fakeDatabase = [
    "My epic playlist",
    "Rap",
    "Metal",
    "Night magic music"
]

export class LeftNavPanel extends React.Component<any, any> {

    availableModules = [
        new NavModule("icons/home.svg", "Home", "home"),
        new NavModule("icons/search.svg", "Search", "search"),
        new NavModule("icons/library.svg", "Your library", "library"),
        new NavModule("", "", ""),
        new NavModule("icons/library.svg", "Create Playlist", "create"),
        new NavModule("icons/library.svg", "Liked Songs", "favorite")
    ]


    render() {
        return <bs.Container className={"PanelBackground"}>
            <TopLogo height={"75px"}/>

            {
                this.availableModules.map((module) => {
                    return <IconTextButton {...module} />
                })
            }

            {
                fakeDatabase.map((value: string) => {
                    return <IconTextButton {...(new NavModule("", value, "playlist/"))} />
                })
            }

        </bs.Container>
    }
}


class TopLogo extends React.Component<any, any> {
    render() {
        return (
            <bs.Image style={{height: this.props.height}} src={"icons/spotify_logo.svg"}/>
        )
    }
}