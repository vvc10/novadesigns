import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center" 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >      <div className="h-8 w-8 mr-0 relative">
        {/* <img src="/nova-logo.svg" alt="Nova Logo" className="h-full w-full" /> */}
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse-slow opacity-70" />
      </div>
      <span className="text-xl font-display font-bold tracking-tight">
        <span className="text-white">Nova</span>
        <span className="text-primary">Designs</span>
      </span>
    </motion.div>
  );
};

export default Logo;