import React from "react";

const MapSection = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.19224928038!2d77.42873637500445!3d8.1833794016521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f17a194d6995%3A0xba516616107330!2sInfoZenX%20IT!5e0!3m2!1sen!2sin!4v1765624299615!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="InfoZenX Location"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
};

export default MapSection;
