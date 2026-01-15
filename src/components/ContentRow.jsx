const ContentRow = ({ items }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
      {items.map((item) => (
        <div key={item.id} className="flex-shrink-0 w-48">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-200"
          />
          <p className="mt-2 text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ContentRow