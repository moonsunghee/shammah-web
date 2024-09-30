import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import lesson from "../../datas/sub3/lesson.json";
import "../../styles/sub3/lesson.scss";
import $ from "jquery";
const lessonData = lesson;
class Lesson extends Component {
  componentDidMount() {
    const ls_wrap = $(".lesson"),
      ls_btns = ls_wrap.find("button"),
      ls_artGroup = ls_wrap.find(".art-wrap .art-group");
    ls_btns.eq(1).addClass('active')
    let i = 0;
    ls_btns.on("click", function () {
      i = $(this).index();
      ls_artGroup.eq(i).css({ display: "flex" }).siblings().hide();
      $(this).addClass("active").siblings().removeClass("active");
    });
  }
  render() {
    return (
      <div className="content lesson">
        <Header
          h3="Lesson"
          p="레슨 가능한 내용을 항목별 최소 시간으로 단위구분을 하였습니다. 희망하시는 레슨에 참고 하시거나 별도 커스터마이징 레슨이 가능하니 내용외 레슨은 문의 해주세요."
        />
        <section>
          <div className="menu-wrap">
            {lessonData.map((data) => {
              return <button>{data.menu}</button>;
            })}
          </div>
          <div className="art-wrap">
            {lessonData.map((data) => {
              return (
                <div className={"art-group"}>
                  {data.article.map((lessonQuery, i) => {
                    return (
                      <article className={"image i" + (i + 1)}>
                        <h4>{lessonQuery.lable}</h4>
                        <ul>
                          {lessonQuery.list.map((listItem) => {
                            return (
                              <li>
                                <b>{listItem.txt}</b>
                                <i>{listItem.hour}H</i>
                              </li>
                            );
                          })}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Lesson;
