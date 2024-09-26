import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/index/invoice.scss";
import invoice from "../../datas/index/invoice.json";
import categorys from "../../datas/index/invoice-categorys.json";
import $ from "jquery";
class Invoice extends Component {
  componentDidMount() {
    const iv_wrap = $(".invoice"),
      iv_artWrap = iv_wrap.find(".art-wrap"),
      iv_artGroup = iv_wrap.find(".art-group"),
      iv_prev = iv_wrap.find(".bt-prev"),
      iv_next = iv_wrap.find(".bt-next"),
      iv_keyword = iv_wrap.find(".key-wrap button");
    iv_keyword.first().addClass("active");
    let j = 0,
      current_pos = 0,
      art_width = parseInt(iv_artGroup.find("article").css("width")),
      artGroup_width = parseInt(iv_artGroup.css("width")),
      moveX = 0;
    iv_keyword.on("click", function () {
      let keyIndex = $(this).index();
      console.log(keyIndex);
      $(this).addClass("active").siblings().removeClass("active");
      switch (keyIndex) {
        case 0:
          {
            moveX = art_width * 0;
            iv_artGroup.stop().animate({ left: moveX }, 300, () => {
              artGroup_width = parseInt(iv_artGroup.css("width"));
              current_pos = parseInt(iv_artGroup.css("left"));
            });
          }
          break;
        case 1:
          {
            moveX = art_width * -3;
            iv_artGroup.stop().animate({ left: moveX }, 300, () => {
              artGroup_width = parseInt(iv_artGroup.css("width"));
              current_pos = parseInt(iv_artGroup.css("left"));
            });
          }
          break;
        case 2:
          {
            moveX = art_width * -6;
            iv_artGroup.stop().animate({ left: moveX }, 300, () => {
              artGroup_width = parseInt(iv_artGroup.css("width"));
              current_pos = parseInt(iv_artGroup.css("left"));
            });
          }
          break;
        case 3:
          {
            moveX = art_width * -8;
            iv_artGroup.stop().animate({ left: moveX }, 300, () => {
              artGroup_width = parseInt(iv_artGroup.css("width"));
              current_pos = parseInt(iv_artGroup.css("left"));
            });
          }
          break;
        case 4:
          {
            moveX = art_width * -10;
            iv_artGroup.stop().animate({ left: moveX }, 300, () => {
              artGroup_width = parseInt(iv_artGroup.css("width"));
              current_pos = parseInt(iv_artGroup.css("left"));
            });
          }
          break;
        case 5:
          {
            moveX = art_width * -11;
            iv_artGroup.stop().animate({ left: moveX }, 300, () => {
              artGroup_width = parseInt(iv_artGroup.css("width"));
              current_pos = parseInt(iv_artGroup.css("left"));
            });
          }
          break;
      }
    });
    iv_prev.on("click", () => {
      current_pos = parseInt(iv_artGroup.css("left"));
      art_width = parseInt(iv_artGroup.find("article").css("width"));
      if (current_pos < 0) {
        moveX = current_pos + art_width;
        iv_artGroup.stop().animate({ left: moveX }, 200, () => {
          artGroup_width = parseInt(iv_artGroup.css("width"));
          current_pos = parseInt(iv_artGroup.css("left"));
          switch (current_pos) {
            case art_width * -1:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(0).addClass("active");
              }
              break;
            case art_width * -4:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(1).addClass("active");
              }
              break;
            case art_width * -6:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(2).addClass("active");
              }
              break;
            case art_width * -8:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(3).addClass("active");
              }
              break;
            case art_width * -10:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(4).addClass("active");
              }
              break;
            case art_width * -11: {
              iv_keyword.removeClass("active");
              iv_keyword.eq(5).addClass("active");
            }
          }
          console.log(current_pos, artGroup_width);
        });
      }
    });
    iv_next.on("click", () => {
      current_pos = parseInt(iv_artGroup.css("left"));
      art_width = parseInt(iv_artGroup.find("article").css("width"));
      if (current_pos != art_width * -11) {
        moveX = current_pos - art_width;
        iv_artGroup.stop().animate({ left: moveX }, 200, () => {
          artGroup_width = parseInt(iv_artGroup.css("width"));
          current_pos = parseInt(iv_artGroup.css("left"));
          switch (current_pos) {
            case 0:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(0).addClass("active");
              }
              break;
            case art_width * -3:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(1).addClass("active");
              }
              break;
            case art_width * -6:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(2).addClass("active");
              }
              break;
            case art_width * -8:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(3).addClass("active");
              }
              break;
            case art_width * -10:
              {
                iv_keyword.removeClass("active");
                iv_keyword.eq(4).addClass("active");
              }
              break;
            case art_width * -11: {
              iv_keyword.removeClass("active");
              iv_keyword.eq(5).addClass("active");
            }
          }
          console.log(current_pos, art_width * -1);
        });
      }
    });
  }
  render() {
    return (
      <div className="content invoice">
        <Header
          h3="Invoice"
          p="최종 견적은 의뢰의 목적이나 페이지수 등에 따라 상담 후 협의하여 책정됩니다. 내용의 견적은 각 페이지당 최소견적이니 최종견적 예산에 참고 하시기 바랍니다."
        />
        <section>
          <div className="key-wrap">
            {categorys.map((items) => {
              return <button>{items.button}</button>;
            })}
          </div>
          <div className="art-wrap">
            <div className="art-group">
              {invoice.map((items, i) => {
                return (
                  <article>
                    <div className={"image i" + (i + 1)}></div>
                    <div className="texts">
                      <h6>
                        <span>{items.listKey}</span>
                      </h6>
                      <h4>{items.title}</h4>
                      <ul>
                        {items.list.map((items) => {
                          return <li>{items.listItem}</li>;
                        })}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div class="btn-wrap">
            <button class="fa-solid fa-chevron-left bt-prev"></button>
            <button class="fa-solid fa-chevron-right bt-next"></button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Invoice;
