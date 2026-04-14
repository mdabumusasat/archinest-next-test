"use client";
import React from "react";
import Link from "next/link";

const comments = [
  {
    name: "Kevin Martin",
    image: "/assets/images/resource/author-2.jpg",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
  },
  {
    name: "Sarah Albert",
    image: "/assets/images/resource/author-3.jpg",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
  },
];

const latestPosts = [
  {
    img: "/assets/images/resource/news-23.jpg",
    title: "Top crypto exchange influencers",
  },
  {
    img: "/assets/images/resource/news-24.jpg",
    title: "Necessity may give us best virtual court",
  },
  {
    img: "/assets/images/resource/news-25.jpg",
    title: "You should know about business plan",
  },
];

const BlogDetails = () => {
  return (
    <section className="blog-details pt-100 pb-100">
        <div className="container">
            <div className="row">
            <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                <div className="blog-details__img">
                    <img src="/assets/images/resource/news-details.jpg" alt="" />
                    <div className="blog-details__date">
                    <span className="day">28</span>
                    <span className="month">Aug</span>
                    </div>
                </div>
                <div className="blog-details__content">
                    <ul className="list-unstyled blog-details__meta">
                    <li>
                        <Link href="#">
                        <i className="fas fa-user-circle"></i> Admin
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <i className="fas fa-comments"></i> 02 Comments
                        </Link>
                    </li>
                    </ul>
                    <h3 className="blog-details__title">
                    Delivering the best web design agency
                    </h3>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                    </p>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                    </p>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                    </p>
                </div>
                <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                    <span>Tags</span>
                    <Link href="#">Business</Link>
                    <Link href="#">Agency</Link>
                    </p>
                    <div className="blog-details__social-list">
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
                <div className="nav-links">
                    <div className="prev">
                    <Link href="#">Bring to the table win-win survival strategies</Link>
                    </div>
                    <div className="next">
                    <Link href="#">How to lead a healthy & well-balanced life</Link>
                    </div>
                </div>
                <div className="comment-one">
                    <h3 className="comment-one__title">
                    {comments.length} Comments
                    </h3>
                    {comments.map((item, i) => (
                    <div className="comment-one__single" key={i}>
                        <div className="comment-one__image">
                        <img src={item.image} alt={item.name} />
                        </div>
                        <div className="comment-one__content">
                        <h3>{item.name}</h3>
                        <p>{item.text}</p>
                        <Link href="#" className="theme-btn btn-style-one comment-one__btn">
                            <span className="btn-title">Reply</span>
                        </Link>
                        </div>
                    </div>
                    ))}
                    <div className="comment-form">
                    <h3 className="comment-form__title">Leave a Comment</h3>
                    <form>
                        <div className="row">
                        <div className="col-sm-6">
                            <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            />
                        </div>
                        <div className="col-sm-6">
                            <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            />
                        </div>
                        </div>
                        <textarea
                        className="form-control mt-3"
                        rows={5}
                        placeholder="Message"
                        ></textarea>
                        <button className="theme-btn btn-style-two mt-3">
                        <span className="btn-title">Submit Comment</span>
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                    <div className="sidebar__single sidebar__search">
                        <form className="sidebar__search-form">
                        <input type="search" placeholder="Search here" />
                        <button type="submit">
                            <i className="lnr-icon-search"></i>
                        </button>
                        </form>
                    </div>
                    <div className="sidebar__single sidebar__post">
                        <h3 className="sidebar__title">Latest Posts</h3>
                        <ul className="sidebar__post-list list-unstyled">
                        {latestPosts.map((post, i) => (
                            <li key={i}>
                            <div className="sidebar__post-image">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                <span className="sidebar__post-content-meta">
                                    <i className="fas fa-user-circle"></i>Admin
                                </span>
                                <Link href="#">{post.title}</Link>
                                </h3>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="sidebar__single sidebar__category">
                        <h3 className="sidebar__title">Categories</h3>
                        <ul className="sidebar__category-list list-unstyled">
                            <li><Link href="/news-details">Business<span className="lnr-icon-arrow-right"></span></Link> </li>
                            <li className="active"><Link href="/news-details">Digital Agency<span className="lnr-icon-arrow-right"></span></Link></li>
                            <li><Link href="/news-details">Introductions<span className="lnr-icon-arrow-right"></span></Link> </li>
                            <li><Link href="/news-details">New Technologies<span className="lnr-icon-arrow-right"></span></Link> </li>
                            <li><Link href="/news-details">Parallax Effects<span className="lnr-icon-arrow-right"></span></Link> </li>
                            <li><Link href="/news-details">Web Development<span className="lnr-icon-arrow-right"></span></Link> </li>
                        </ul>
                    </div>
                    <div className="sidebar__single sidebar__tags">
                        <h3 className="sidebar__title">Tags</h3>
                        <div className="sidebar__tags-list"> <Link href="#">Consulting</Link> <Link href="#">Agency</Link> <Link href="#">Business</Link> <Link href="#">Digital</Link> <Link href="#">Experience</Link> <Link href="#">Technology</Link> </div>
                    </div>
                    <div className="sidebar__single sidebar__comments">
                        <h3 className="sidebar__title">Recent Comments</h3>
                        <ul className="sidebar__comments-list list-unstyled">
                            <li>
                            <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                            <div className="sidebar__comments-text-box">
                                <p>A wordpress commenter on <br />
                                launch new mobile app
                                </p>
                            </div>
                            </li>
                            <li>
                            <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                            <div className="sidebar__comments-text-box">
                                <p> <span>John Doe</span> on template:</p>
                                <h5>comments</h5>
                            </div>
                            </li>
                            <li>
                            <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                            <div className="sidebar__comments-text-box">
                                <p>A wordpress commenter on <br />
                                launch new mobile app
                                </p>
                            </div>
                            </li>
                            <li>
                            <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                            <div className="sidebar__comments-text-box">
                                <p> <span>John Doe</span> on template:</p>
                                <h5>comments</h5>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default BlogDetails;