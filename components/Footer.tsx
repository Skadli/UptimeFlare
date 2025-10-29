import { Divider, Text } from '@mantine/core'

export default function Footer() {
  return (
    <>
      <Divider mt="lg" />
      <Text
        size="xs"
        mt="xs"
        mb="xs"
        style={{
          textAlign: 'center',
        }}
      >
        powered by meAI

      </Text>
    </>
  )
}
