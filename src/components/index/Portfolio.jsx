import React, { Component } from "react";
import Headr from "../Header";
import Footer from "../Footer";
import "../../styles/index/portfoilo.scss";
import $ from "jquery";
import portfolio from "../../datas/index/portfolio.json";
const portfoiloList = portfolio;
class Portfolio extends Component {
  componentDidMount() {
    const pf_wrap = $(".portfolio"),
      pf_imgGroup = pf_wrap.find(".img-group"),
      pf_prev = pf_wrap.find(".bt-prev"),
      pf_next = pf_wrap.find(".bt-next");
    pf_imgGroup
      .css({ left: "-100%" })
      .find(".image:last")
      .prependTo(pf_imgGroup);
    pf_prev.on({
      click: () => {
        pf_imgGroup.stop().animate({ left: "0" }, () => {
          pf_imgGroup
            .css({ left: "-100%" })
            .find(".image:last")
            .prependTo(pf_imgGroup);
        });
      },
    });
    pf_next.on({
      click: () => {
        pf_imgGroup.stop().animate({ left: "-200%" }, () => {
          pf_imgGroup
            .css({ left: "-100%" })
            .find(".image:first")
            .appendTo(pf_imgGroup);
        });
      },
    });
  }
  render() {
    return (
      <div className="content portfolio">
        <section>
          <div className="img-wrap">
            <div className="img-group">
              {portfoiloList.map((data, i) => {
                return (
                  <article className={"image i" + (i + 1)}>
                    <h4>{data.title}</h4>
                    <ul>
                      {data.list.map((listItem) => {
                        return (
                          <li>
                            <b>{listItem.listTitle}</b>
                            <i>{listItem.listItem}</i>
                          </li>
                        );
                      })}
                    </ul>
                    <p>{data.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="btn-wrap">
            <button className="fa-solid fa-chevron-left bt-prev"></button>
            <button className="fa-solid fa-chevron-right bt-next"></button>
          </div>
        </section>
        <Headr h3="Portfolio" />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
