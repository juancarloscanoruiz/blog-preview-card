import BlogCardImage from "../../assets/images/illustration-article.svg";
import AvatarImage from "../../assets/images/image-avatar.webp";
import { ClassNameFormatter } from "../../utils/class-name";
import "./BlogCard.styles.scss";

const componentName = "BlogCard";
const classNameGen = new ClassNameFormatter(componentName);

const BlogCard = () => {
  return (
    <article className={classNameGen.getComponentClassName()}>
      <img
        src={BlogCardImage}
        alt=""
        className={classNameGen.getElementClassName("image")}
      />
      <p className={classNameGen.getElementClassName("label")}>Learning</p>
      <p className={classNameGen.getElementClassName("date")}>
        Published 21 Dec 2023
      </p>
      <h4 className={classNameGen.getElementClassName("title")}>
        HTML & CSS Foundations
      </h4>
      <p className={classNameGen.getElementClassName("description")}>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className={classNameGen.getElementClassName("author")}>
        <img
          src={AvatarImage}
          alt="Blog author"
          className={classNameGen.getElementClassName("author-avatar")}
        />
        <p className={classNameGen.getElementClassName("author-name")}>
          Greg Hooper
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
