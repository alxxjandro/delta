import { LoadingOverlay, Center, Stack, Title } from '@mantine/core'

interface SpinnerProps {
  isActive: boolean
  title?: string
  blur?: boolean
}

export default function Spinner({ isActive, title, blur = true }: SpinnerProps) {
  if (!isActive) return null

  return (
    <>
      <LoadingOverlay
        visible
        overlayProps={{
          ...(blur && { blur: 6, backgroundOpacity: 0.15 }),
        }}
        zIndex={1000}
        loaderProps={{ color: 'black', type: 'dots' }}
        pb={title && 50}
      />

      {title && (
        <Center pos="fixed" inset={0} style={{ zIndex: 1001 }}>
          <Stack align="center">
            <Title c="gray.8" order={2}>
              {title}
            </Title>
          </Stack>
        </Center>
      )}
    </>
  )
}
