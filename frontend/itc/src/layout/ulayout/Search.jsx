import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBox = ({ open, setOpen, onSearch }) => {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    function handleClick(e) {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setQ("");
        onSearch?.("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onSearch, setOpen]);

  function onKeyDown(e) {
    if (e.key === "Escape") {
      setOpen(false);
      setQ("");
      onSearch?.("");
    }
  }

  useEffect(() => {
    const id = setTimeout(() => onSearch?.(q.trim()), 250);
    return () => clearTimeout(id);
  }, [q, onSearch]);

  return (
    <div className="search-wrap" ref={wrapperRef} onKeyDown={onKeyDown}>
      <div className={`search-field ${open ? "open" : ""}`}>
        <FaSearch className="s-icon" size={16} aria-hidden="true" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          aria-label="Search"
        />
        <button
          className="clear-btn"
          aria-label="Close search"
          onClick={() => {
            setOpen(false);
            setQ("");
            onSearch?.("");
          }}
        >
          <FaTimes size={16} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
