import {
  Stack,
  Group,
  Text,
  Title,
  Button,
  Paper,
  TextInput,
  Textarea,
  Select,
  Container,
} from '@mantine/core'
import CLS from '../../../api/coverLetterService'
import Spinner from '../Spinner'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { notifications } from '@mantine/notifications'
import { IconArrowLeft, IconSparkles, IconInfoCircle } from '@tabler/icons-react'
import type { ICoverLetter } from '../../types/Interfaces'

export default function NewCoverLetter() {
  /**
   * State to control the loading times
   */
  const [loading, setLoading] = useState<boolean>(false)

  /**
   * Constant environment variables
   */
  const navigate = useNavigate()

  /**
   * Mantine hook to use the cover letter form
   * and validate the output before sending
   */
  const form = useForm<ICoverLetter>({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      company: '',
      position: '',
      keypoints: '',
      jobDescription: '',
      tone: 'Professional',
    },
    validate: {
      title: (v) => v.trim().length <= 0 && 'The title cannot be empty!',
      company: (v) => v.trim().length <= 0 && 'The company cannot be empty!',
      position: (v) => v.trim().length <= 0 && 'The position cannot be empty!',
      keypoints: (v) => v.trim().length <= 0 && 'Add at least one keypoint!',
      jobDescription: (v) => v.trim().length <= 0 && 'Empty job description!',
      tone: (v) => (v ? null : 'Tone is required'),
    },
  })

  /**
   * Middleware function to trigger the creation of the cover letter
   */
  const handleSubmit = form.onSubmit(async (data: ICoverLetter) => {
    try {
      setLoading(true)
      await CLS.generate(data)

      notifications.show({
        title: 'Cover letter created',
        message: "Success! You'll be redirected to your dashboard.",
        color: 'green',
      })

      setTimeout(() => {
        navigate('/dashboard')
      }, 800)
    } catch (e) {
      notifications.show({
        title: 'Something went wrong',
        message:
          e instanceof Error
            ? e.message
            : 'An unexpected error occurred. Please try again.',
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  })

  return (
    <>
      <Spinner isActive={loading} title="Creating cover letter" />
      <Stack bg="gray.0" mih="100dvh" gap={0}>
        <Paper radius={0} withBorder h="6dvh">
          <Stack align="end" justify="center" mr={8} h="100%">
            <Button
              variant="subtle"
              leftSection={<IconArrowLeft size={16} />}
              onClick={() => navigate(-1)}
            >
              Back to cover letters
            </Button>
          </Stack>
        </Paper>

        <Container size="lg" h="100%">
          <Stack gap="xl" pt="6dvh" justify="start">
            <Stack gap={4}>
              <Title order={1}>Create cover letter</Title>
              <Text size="md" c="dimmed" mt={-10}>
                Add key details and let AI generate a personalized cover letter
              </Text>
            </Stack>

            <form onSubmit={handleSubmit}>
              <Group gap="lg" align="stretch">
                <Stack flex={1}>
                  <Paper withBorder radius="md" p="lg">
                    <Stack gap="md">
                      <Stack gap={2}>
                        <Text fw={600}>Job details</Text>
                        <Text size="sm" c="dimmed">
                          Information about the role you are applying for
                        </Text>
                      </Stack>

                      <TextInput
                        label="Title"
                        placeholder="Software Engineer"
                        withAsterisk
                        {...form.getInputProps('title')}
                      />

                      <Group grow>
                        <TextInput
                          label="Company"
                          placeholder="Google"
                          withAsterisk
                          {...form.getInputProps('company')}
                        />
                        <TextInput
                          label="Position"
                          placeholder="Software Engineer"
                          withAsterisk
                          {...form.getInputProps('position')}
                        />
                      </Group>
                    </Stack>
                  </Paper>

                  <Paper withBorder radius="md" p="lg" flex={1}>
                    <Stack gap="md">
                      <Stack gap={2}>
                        <Text fw={600}>Job description</Text>
                        <Text size="sm" c="dimmed">
                          Paste the job description to improve the generated cover letter
                        </Text>
                      </Stack>

                      <Textarea
                        label="Job description"
                        placeholder="Paste the full job description here"
                        autosize
                        withAsterisk
                        minRows={8}
                        maxRows={8}
                        {...form.getInputProps('jobDescription')}
                      />
                    </Stack>
                  </Paper>
                </Stack>

                <Stack flex={1}>
                  <Paper withBorder radius="md" p="lg">
                    <Stack gap="md">
                      <Stack gap={2}>
                        <Text fw={600}>Key points</Text>
                        <Text size="sm" c="dimmed">
                          What should the cover letter focus on?
                        </Text>
                      </Stack>

                      <Textarea
                        label="Key points"
                        placeholder="Years of experience, skills, achievements, motivation"
                        autosize
                        minRows={6}
                        maxRows={6}
                        withAsterisk
                        {...form.getInputProps('keypoints')}
                      />

                      <Group gap="xs" align="flex-start" wrap="nowrap">
                        <IconInfoCircle size={16} />
                        <Text size="xs" c="dimmed">
                          Include relevant achievements and why you are interested in the
                          company
                        </Text>
                      </Group>
                    </Stack>
                  </Paper>

                  <Paper withBorder radius="md" p="lg">
                    <Stack gap="md">
                      <Stack gap={2}>
                        <Text fw={600}>Tone & style</Text>
                        <Text size="sm" c="dimmed">
                          Choose how the letter should sound
                        </Text>
                      </Stack>

                      <Select
                        label="Tone"
                        withAsterisk
                        data={[
                          { value: 'Professional', label: 'Professional' },
                          { value: 'Friendly', label: 'Friendly' },
                          { value: 'Enthusiastic', label: 'Enthusiastic' },
                          { value: 'Confident', label: 'Confident' },
                        ]}
                        {...form.getInputProps('tone')}
                      />
                    </Stack>
                  </Paper>

                  <Paper withBorder radius="md" p="lg">
                    <Group justify="space-between" wrap="nowrap" align="center">
                      <Stack gap={2}>
                        <Text fw={600}>Ready? hold tight</Text>
                        <Text size="sm" c="dimmed">
                          This usually takes a few seconds
                        </Text>
                      </Stack>

                      <Button
                        type="submit"
                        size="md"
                        color="primary.7"
                        leftSection={<IconSparkles size={16} />}
                      >
                        Generate
                      </Button>
                    </Group>
                  </Paper>
                </Stack>
              </Group>
            </form>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
