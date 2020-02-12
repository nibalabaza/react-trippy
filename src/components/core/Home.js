import React from "react";
import Api from '../../utils/Api';
import Global from '../../Global'
import Card from '../city/Card';
import Config from '../../Config';
import HomeContainer from "../../containers/HomeContainer"


class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.cities.map((city, index) => {
                    return <Card
                    name = {city.name}
                    slug = {city.slug}
                   source = {Config.host+city.source} />
                })
                }
                {/* {this.props.cities.length > 0 && <Card
                 name = {this.props.cities[0].name}
                 slug = {this.props.cities[0].slug}
                source = {Config.host+this.props.cities[0].source} />}
                 */}

               
            </div>
        )
    }

}

export default Home;