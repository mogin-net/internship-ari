import React, { useEffect, useRef, useState } from "react";
import LoreGallery from "../../components/lore/loreGallery";

const Lore = () => {
  const [selectedLore, setSelectedLore] = useState(null);
  const [lore, setLore] = useState([]);

  /*
   * =========================================================
   * GET ALL LORE
   * =========================================================
   */

  useEffect(() => {
    fetch("http://localhost:3000/lore")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil lore");
        }

        return response.json();
      })
      .then((result) => {
        setLore(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /*
   * =========================================================
   * GET LORE DETAIL
   * =========================================================
   */

  const handleLoreSelect = async (lore) => {
    try {
      const response = await fetch(`http://localhost:3000/lore/${lore.id}`);

      if (!response.ok) {
        throw new Error("Gagal mengambil detail lore");
      }

      const result = await response.json();

      setSelectedLore(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * =========================================================
   * BACK
   * =========================================================
   */
  const handleBack = () => {
    setSelectedLore(null);
  };

  return (
    <LoreGallery
      lore={lore}
      selectedLore={selectedLore}
      onSelectLore={handleLoreSelect}
      onBack={handleBack}
    />
  );
};

export default Lore;
