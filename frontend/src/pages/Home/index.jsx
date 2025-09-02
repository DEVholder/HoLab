import { useState } from "react";
import useFetchServices from '../../hooks/useFetchServices';
import ServiceCard from '../../features/services/components/ServiceCard';

const Home = () => {
  const { data: services, loading, error } = useFetchServices(); 

  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div className="text-center text-red-500">데이터를 불러오는 데 실패했습니다.</div>;
  }

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Home 섹션 */}
      <section id="home" className="relative h-[50vh]">
        <div className="absolute top-2/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-7xl font-bold mb-4">HoLab</h1>
          <p className="text-xl text-gray-300">홈서버에서 운영되는 마이크로서비스들을 위한 허브입니다.</p>
        </div>
      </section>

      {/* Service 섹션 */}
      <section id="service" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
          <div className="mb-10 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="서비스 이름 또는 설명으로 검색..."
              className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {loading ? (
            <p className="text-center text-gray-400">서비스 목록을 불러오는 중...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          )}
          
          {!loading && filteredServices.length === 0 && (
            <p className="text-center text-gray-500 mt-12">검색 결과가 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home;