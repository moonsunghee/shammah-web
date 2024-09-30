import React, {Component} from "react";
import "../../styles/sub3/main.scss";
import $ from "jquery";
class Main extends Component {
  componentDidMount(){
    const mn_wrap = $(".mn-wrap"),
      mn_imgGroup = mn_wrap.find(".img-group"),
      mn_prev = mn_wrap.find(".bt-prev"),
      mn_next = mn_wrap.find(".bt-next");
    mn_imgGroup
      .css({ left: "-100%" })
      .find(".image:last")
      .prependTo(mn_imgGroup);
    mn_prev.on({
      click: () => {
        mn_imgGroup.stop().animate({ left: "0" }, () => {
          mn_imgGroup
            .css({ left: "-100%" })
            .find(".image:last")
            .prependTo(mn_imgGroup);
        });
      },
    });
    mn_next.on({
      click: () => {
        mn_imgGroup.stop().animate({ left: "-200%" }, () => {
          mn_imgGroup
            .css({ left: "-100%" })
            .find(".image:first")
            .appendTo(mn_imgGroup);
        });
      },
    });
  }

  render() {
    return (
      <div className="mn-wrap">
        <main>
          <div className="texts">
            <h3>
              <i>About</i>
              <b> SHAMMAH</b>
            </h3>
            <h4>열심히 최선을 다하는 것은 물론 잘 만들어 드립니다.</h4>
            <ul>
              <li>
                <h5>-제제소프트</h5>
                <p>책임연구원 : 프론트엔드개발, 앱/웹 디자이너</p>
              </li>
              <li>
                <h5>-미디어로그</h5>
                <p>책임연구원 : 고급기획자</p>
              </li>
              <li>
                <h5>-그린아카데미, 이젠아카데미</h5>
                <p>
                  웹퍼블리셔 전문가 과정 교강사:기획,디자인,웹퍼블리셔,제이쿼리
                  강의
                </p>
              </li>
              <li>
                <h5>-로시컴</h5>
                <p>팀장 : 웹컨텐츠 개발팀</p>
              </li>
            </ul>
          </div>
          <div className="img-wrap">
            <div className="img-group">
              <div className="image i1">1</div>
              <div className="image i2">2</div>
              <div className="image i3">3</div>
              <div className="image i4">4</div>
            </div>
            <div className="btn-group">
              <button className="fa-solid fa-chevron-left bt-next"></button>
              <button className="fa-solid fa-chevron-right bt-next"></button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
