function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = {
  post: {
    id: 1,
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    user: "Richard McClintock",
    userPic: "https://телеграм.мессенджеры.рус/wp-content/uploads/2016/04/garfild-dlya-telegram-online-16.png",
    publishDate: "2 Weeks ago",
    likes: 18,
    commentsNumber: 3 },

  comments: [
  {
    id: 0,
    user: "Bonorum Malorum",
    content: "Many desktop publishing packages and web page editors now use",
    userPic: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png",
    publishDate: "2 days ago" },

  {
    id: 1,
    user: "Cicero Areals",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    userPic: "https://static.tgstat.ru/public/images/channels/_0/f0/f0f7f79a275a83bfe8769dfd81d40bb2.jpg",
    publishDate: "4 days ago" },

  {
    id: 2,
    user: "Hanna Pages",
    content: "Lorem Ipsum comes from sectionsof de Finibus Bonorum et Malorum (The Extremes of Good and Evil)",
    userPic: "https://vignette.wikia.nocookie.net/versus-compendium/images/0/09/Garfield.png/revision/latest?cb=20181122134939",
    publishDate: "1 Week ago" }] };




class Post extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      like: false });_defineProperty(this, "addLike",


    () => {
      let changeLike = this.state.like;
      let add;
      changeLike ? (changeLike = false, add = -1) : (
      changeLike = true, add = 1);

      this.setState({
        like: changeLike });


      this.props.onAddLike({
        likes: this.props.likes + add });


    });}
  render() {
    return (
      React.createElement("div", { className: "post" },
      React.createElement("div", { className: "postBody" },
      React.createElement("img", { src: this.props.userPic, className: "postPic", alt: "user Pic" }),
      React.createElement("div", { className: "postContent" },
      React.createElement("div", { className: "postHeader" },
      React.createElement("h2", { className: "postAuthor", id: this.props.id }, this.props.user),
      React.createElement("span", { className: "publishDate" }, this.props.publishDate)),

      React.createElement("span", { className: "postText" }, this.props.content),
      React.createElement("div", { className: "postDesc" },
      React.createElement("span", { className: "desc" },
      this.state.like ?
      React.createElement("i", { onClick: this.addLike, className: "fas fa-heart" }) :
      React.createElement("i", { onClick: this.addLike, className: "far fa-heart" }),
      React.createElement("span", null, this.props.likes, " "), "Likes"),


      React.createElement("span", { className: "desc" }, React.createElement("i", { class: "far fa-comment" }), React.createElement("span", null, this.props.commentsNumber), " Comments")))),



      this.props.children));


  }}


Post.propsTypes = {
  userPic: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  commentsNumber: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onAddLike: PropTypes.func.isRequired };


const Comment = (props) =>
React.createElement("div", { className: "comment" },
React.createElement("img", { src: props.userPic, className: "commentPic", alt: "user Pic" }),
React.createElement("div", { className: "commentBody" },
React.createElement("div", { className: "commentHeader" },
React.createElement("h3", { className: "commentAuthor" }, props.user),
React.createElement("span", { className: "publishDate" }, props.publishDate)),

React.createElement("span", { className: "commentContent" }, props.content)));



Comment.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userPic: PropTypes.string.isRequired };


class CreateComment extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      content: "" });_defineProperty(this, "handleTextChange",


    e => {
      const content = e.target.value;
      this.setState({
        content });

    });_defineProperty(this, "handleSubmit",

    e => {
      e.preventDefault();
      this.props.onCommentSubmit({
        user: "Anonym",
        content: this.state.content.trim(),
        userPic: "https://github.com/OlgaKoplik/CodePen/blob/master/anonym.png?raw=true",
        publishDate: "Right now" });

      this.setState({
        content: "" });

    });}

  render() {
    return (
      React.createElement("form", { onSubmit: this.handleSubmit, className: "createComment" },
      React.createElement("label", { htmlFor: "comment" }, "Your Comment"),
      React.createElement("textarea", {
        id: "comment",
        type: "text",
        placeholder: "Comment",
        value: this.state.content,
        onChange: this.handleTextChange,
        required: true }),
      React.createElement("button", { type: "submit" }, "Post Comment")));


  }}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string };


class CommentBox extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      comments: this.props.comments,
      likes: this.props.post.likes,
      commentsNumber: this.props.post.commentsNumber });_defineProperty(this, "handleCommentSubmit",


    comment => {
      const comments = this.state.comments;
      comment.id = Date.now();
      const newComments = [comment].concat(comments);
      this.setState({
        comments: newComments,
        commentsNumber: this.state.commentsNumber + 1 });

    });_defineProperty(this, "handleLike",
    changeLikesNum => {
      const LikesNum = changeLikesNum.likes;
      this.setState({
        likes: LikesNum });

    });}
  render() {
    return (
      React.createElement("div", { className: "commentBox" },
      React.createElement(Post, {
        publishDate: this.props.post.publishDate,
        userPic: this.props.post.userPic,
        likes: this.state.likes,
        commentsNumber: this.state.commentsNumber,
        id: this.props.post.id,
        content: this.props.post.content,
        user: this.props.post.user,
        onAddLike: this.handleLike },
      React.createElement(CreateComment, {
        onCommentSubmit: this.handleCommentSubmit })),


      this.state.comments.map((comment) =>
      React.createElement(Comment, {
        publishDate: comment.publishDate,
        key: comment.id,
        id: comment.id,
        content: comment.content,
        user: comment.user,
        userPic: comment.userPic }))));



  }}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object) };

ReactDOM.render(React.createElement(CommentBox, {
  comments: data.comments,
  post: data.post }),
document.getElementById("root"));