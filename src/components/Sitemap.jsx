import React, {Component} from "react";
const siteData = [
  {
    lable: '회사소개',
    list : ['설립목적', 'CIP소개', '사업방향'],
    key : ''
  },
  {
    lable: '제작안내',
    list : ['앱제작', '웹제작', '유인물제작', '홍보물제작'],
    key : ''
  },
  {
    lable: '디자이너',
    list : ['정규디자이너', '프리랜서', '디자이너레슨', '개발과정레슨'],
    key : ''
  },
  {
    lable: '포트폴리오',
    list : ['대표포트폴리오', '디자인/개발 견적', '레슨과정안내'],
    key : ''
  },
  {
    lable: '삼마디자인D9',
    list : [],
    key : ''
  },
];
class SiteMap extends Component{
  render(){
    return(
      <div className="siteMap">
        <nav>
          {siteData.map((data)=>{
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