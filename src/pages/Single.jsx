import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CollapsedMenu from "./../components/CollapsedMenu";
import SingleContent from "./../components/SingleContent";

function Single() {
  return (
    <div>
      <Header></Header>
      <SingleContent></SingleContent>
      <Footer></Footer>
      <CollapsedMenu></CollapsedMenu>
    </div>
  );
}

export default Single;
