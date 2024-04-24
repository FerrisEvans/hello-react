import React from 'react';
// import {useLocation, useParams, useSearchParams} from "react-router-dom";

const Detail = (props) => {
  // params参数：如果路由规则是/home/msg/detail/:id/:title/:content 则可以使用useParams钩子获取到参数对象
  // const {id, title, content} = useParams();

  // search参数：如果路由规则是/home/msg/detail?id=xxx&title=xxx&content=xxx 则可以使用useSearchParams钩子，也可以使用useLocation钩子
  // const [search, setSearch] = useSearchParams();
  // console.log(search.get('id'))
  // console.log(search.get('title'))
  // console.log(search.get('content'))
  // const locationObj = useLocation()

  // state参数：如果路由规则如下，可以使用useLocation钩子
  /*
  <Link to="detail" state={{id: item.id, title: item.title, content: item.content}}>{item.title}</Link>
   */
  // const {state: {id, title, content}} = useLocation();

  return (
    <div>
      {props.content}
    </div>
  );
};

export default Detail;