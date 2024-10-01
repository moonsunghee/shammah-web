import React, {Component} from "react";
import sitemap from '../datas/sitemap.json'
class SiteMap extends Component{
  render(){
    return(
      <div className="siteMap">
        <nav>
          {sitemap.map((data)=>{
            return(
              <ul>
                <li>{data.lable}</li>
                {data.list.map((item)=>{
                  return(
                    <li>{item}</li>
                  );
                })}
                
              </ul>
            );
          })}
        </nav>
      </div>
    );
  }
}
export default SiteMap;