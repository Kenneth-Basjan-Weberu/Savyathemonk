import React from 'react'

const HorizontalRule = () => {
    const horizontalRuleStyle = {
        borderTop: '2px solid #fff',
        width: '100%', // Full width of the container
        margin: '20px 0', // Add spacing above and below the line
      };
    
      return (
        <div style={horizontalRuleStyle}></div>
      );
    };

export default HorizontalRule