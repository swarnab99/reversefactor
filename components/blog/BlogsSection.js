/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
dayjs().format();
import countapi from "countapi-js";
import { FiCalendar, FiEye } from "react-icons/fi";

const BlogsSection = ({ blogPosts }) => {
  // console.log(blogPosts);
  return (
    <section className="wrapper mt-14 bg-light">
      <div className="container">
        <h2 className="display-4 mb-10 text-center">Recent Blog Posts</h2>
        {/* <p className='lead fs-lg mb-10 text-center px-md-16 px-lg-21 px-xl-0'>
					Here are the latest tips from our blog that got the most attention.
				</p> */}
        <div className="row">
          {blogPosts?.data?.allBlog_posts?.edges?.map((item, index) => (
            <BlogItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogItem = ({ data }) => {
  const { title, featured_image, published_date, _meta } = data.node;
  /* ===== COUNT & UPDATE NO. OF VIEWS ===== */
  // const [views, setViews] = useState(0);
  // useEffect(() => {
  // 	countapi.get(`${process.env.PRISMIC_ID}.in`, _meta?.uid).then((result) => {
  // 		result?.value && setViews(result.value);
  // 	});
  // }, [_meta?.uid]);
  /* ===== END ===== */
  return (
    <div className="col-lg-4 mb-10">
      <article>
        <figure className="overlay overlay-1 hover-scale rounded mb-5">
          <Link href={`/${_meta?.uid}`}>
            <a>
              <img
                src={featured_image?.custom?.url}
                alt={featured_image?.alt}
                className="img-fluid lozad"
              />
            </a>
          </Link>
          {/* <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption> */}
        </figure>
        <div className="post-header">
          <h2 className="post-title h3 mt-1 mb-3">
            <Link href={`/${_meta?.uid}`}>
              <a className="link-dark">{title[0]?.text}</a>
            </Link>
          </h2>
        </div>

        <div className="post-footer">
          <ul className="post-meta">
            <li className="post-date">
              <i className="">
                <FiCalendar />
              </i>
              {dayjs(published_date).format("DD MMM, YYYY")}
            </li>
            {/* <li className="post-comments">
              <i className="">
                <FiEye />
              </i>
              {views}
            </li> */}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default BlogsSection;
