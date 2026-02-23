import { useState, useEffect } from 'react'
import { Wind, Droplets, Sun, Navigation, Eye, Compass } from 'lucide-react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import BentoGrid from './components/BentoGrid'
import MainWeatherCard from './components/MainWeatherCard'
import WeatherTile from './components/WeatherTile'
import Forecast from './components/Forecast'
import { getWeather } from './services/weatherService'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleSearch = async (city) => {
    try {
      setLoading(true)
      setError(null)
      const data = await getWeather(city)
      setWeather(data)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSearch('San Francisco')
  }, [])

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />

      {error && (
        <div className="glass-card p-6 border-red-500/50 bg-red-500/10 text-center mb-8">
          <p className="text-red-400 font-medium">{error}</p>
          <button
            onClick={() => handleSearch('San Francisco')}
            className="mt-2 text-sm text-white/50 hover:text-white underline"
          >
            Reset to San Francisco
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="animate-in fade-in duration-700">
          <BentoGrid>
            <MainWeatherCard data={weather.current} />

            <WeatherTile
              title="Wind Speed"
              value={weather.current.windSpeed}
              unit="km/h"
              icon={Wind}
              delay={0.1}
            />
            <WeatherTile
              title="Humidity"
              value={weather.current.humidity}
              unit="%"
              icon={Droplets}
              delay={0.2}
            />
            <WeatherTile
              title="UV Index"
              value={weather.current.uvIndex}
              unit="Low"
              icon={Sun}
              delay={0.3}
            />
            <WeatherTile
              title="Feels Like"
              value={weather.current.feelsLike}
              unit="°"
              icon={Navigation}
              delay={0.4}
            />
            <WeatherTile
              title="Visibility"
              value={weather.current.visibility}
              unit="km"
              icon={Eye}
              delay={0.5}
            />
            <WeatherTile
              title="Pressure"
              value={weather.current.pressure}
              unit="hPa"
              icon={Compass}
              delay={0.6}
            />
          </BentoGrid>

          <Forecast data={weather.forecast} />
        </div>
      )}
    </Layout>
  )
}

export default App
