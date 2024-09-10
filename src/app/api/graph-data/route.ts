import { NextResponse } from 'next/server'
import driver from '@/lib/neo4j'

export async function GET() {
  const session = driver.session()
  try {
    const result = await session.run(
      'MATCH (n)-[r]->(m) RETURN n, r, m LIMIT 100'
    )
    const nodes = new Map()
    const links = []

    result.records.forEach(record => {
      const source = record.get('n')
      const target = record.get('m')
      const relationship = record.get('r')

      if (!nodes.has(source.identity.low)) {
        nodes.set(source.identity.low, { id: source.identity.low, label: source.properties.name || 'Unknown' })
      }
      if (!nodes.has(target.identity.low)) {
        nodes.set(target.identity.low, { id: target.identity.low, label: target.properties.name || 'Unknown' })
      }

      links.push({
        source: source.identity.low,
        target: target.identity.low,
        label: relationship.type
      })
    })

    return NextResponse.json({ nodes: Array.from(nodes.values()), links })
  } catch (error) {
    console.error('Error fetching graph data:', error)
    return NextResponse.json({ error: 'Error fetching graph data' }, { status: 500 })
  } finally {
    await session.close()
  }
}