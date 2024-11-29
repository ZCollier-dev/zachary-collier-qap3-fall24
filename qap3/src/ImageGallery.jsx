import { motion } from "framer-motion";

function ImageGallery(props) {
  const listItems = props.fetchedImages.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.img
        src={item}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2, boxShadow: "10px 10px 10px black" }}
      ></motion.img>
    </motion.div>
  ));

  return (
    <motion.div
      className="image-gallery"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {listItems}
    </motion.div>
  );
}

export default ImageGallery;
