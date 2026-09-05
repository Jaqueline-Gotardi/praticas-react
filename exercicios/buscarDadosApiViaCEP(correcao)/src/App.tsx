import { useState } from 'react'

interface Cep {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

async function buscaCep(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await response.json()
}

export const App = () => {
    const [cepData, setCepData] = useState<Cep | null>(null)
    const [error, setError] = useState<string | null>(null)


    async function getCep(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const cep = formData.get('cep') as string

        setCepData(null)
        setError(null)

        if (cep.length !== 8) {
            setError('CEP deve conter exatamente 8 dígitos')
            return
        }

        try {
            const cepData = await buscaCep(cep)

            if (cepData.erro) {
                setError('CEP não encontrado')
                return
            }

            setCepData(cepData)
        } catch (error) {
            setError('Erro ao buscar CEP. Tente novamente.')
            console.log(error)
        }

        event.currentTarget.reset()
    }

    return (
        <form onSubmit={getCep}>
            <label htmlFor='cep'>Digite seu CEP</label>
            <input type='text' name='cep' id='cep' />
            <button type='submit'>Buscar</button>

            <div>
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
                {cepData && (
                    <div>
                        <p>CEP: {cepData?.cep}</p>
                        <p>Logradouro: {cepData?.logradouro}</p>
                        <p>Bairro: {cepData?.bairro}</p>
                        <p>Cidade: {cepData?.localidade}</p>
                        <p>Estado: {cepData?.uf}</p>
                    </div>
                )}
            </div>
        </form>
    )
}