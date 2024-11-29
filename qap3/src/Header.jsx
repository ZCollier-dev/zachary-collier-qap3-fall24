import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1>Dog Image Gallery</h1>
    </motion.header>
  );
}

export default Header;
