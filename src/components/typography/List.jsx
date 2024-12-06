const List = ({ items, ordered = false }) => {
    const Tag = ordered ? 'ol' : 'ul';
    return (
      <Tag className={ordered ? 'list-decimal pl-5' : 'list-disc pl-5'}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Tag>
    );
  };
  
  export default List;
  