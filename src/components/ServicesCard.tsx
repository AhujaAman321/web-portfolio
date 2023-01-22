
const ServicesCard = ({ data }) => {
    return (
        <div className=' bg-slate-100 rounded-lg shadow-xl p-6'>
            <h3 className='text-2xl font-bold text-left py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500  '>{data.title}</h3>
            <p className="text-left">{data.content}</p>
        </div>
    )
}

export default ServicesCard