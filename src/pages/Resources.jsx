import React, { useState, useEffect } from 'react';

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const savedResources = localStorage.getItem('resources');
    if (savedResources) {
      setResources(JSON.parse(savedResources));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('resources', JSON.stringify(resources));
  }, [resources]);

  const handleDelete = (index) => {
    setResources((prevResources) => {
      const updatedResources = [...prevResources];
      updatedResources.splice(index, 1);
      return updatedResources;
    });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const newResource = {
      name: file.name,
      url: URL.createObjectURL(file),
    };
    setResources((prevResources) => [...prevResources, newResource]);
  };

  return (
    <div>
      <h1>Resources</h1>
      <input type="file" onChange={handleUpload} />
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
