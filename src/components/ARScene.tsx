import React, { useEffect } from 'react';

interface ARSceneProps {
  destination: string;
}

const ARScene: React.FC<ARSceneProps> = ({ destination }) => {
  useEffect(() => {
    // Register custom A-Frame component for navigation arrows
    if (!(window as any).AFRAME.components['navigation-arrow']) {
      (window as any).AFRAME.registerComponent('navigation-arrow', {
        init: function() {
          this.el.addEventListener('click', () => {
            console.log('Arrow clicked');
          });
        }
      });
    }
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
      renderer="logarithmicDepthBuffer: true;"
      vr-mode-ui="enabled: false"
    >
      {/* Camera */}
      <a-entity camera></a-entity>

      {/* Navigation Arrow */}
      <a-entity
        navigation-arrow
        geometry="primitive: cone; height: 2; radiusBottom: 0.5"
        material="color: #2563eb"
        position="0 0 -5"
        rotation="-90 0 0"
        animation="property: position; dir: alternate; dur: 1000; easing: easeInOutQuad; loop: true; to: 0 0.2 -5"
      ></a-entity>

      {/* Destination Marker */}
      <a-marker preset="hiro">
        <a-text
          value={`Destination: ${destination}`}
          position="0 0.5 0"
          rotation="-90 0 0"
          align="center"
          color="#2563eb"
        ></a-text>
      </a-marker>
    </a-scene>
  );
};

export default ARScene;