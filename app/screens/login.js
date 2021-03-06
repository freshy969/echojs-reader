import React from 'react'
import { View, Button, TextInput } from 'react-native'
import { Cell, Section } from 'react-native-tableview-simple'
import { AuthContext, ThemeContext } from '../context'

export const LoginScreen = ({ navigation }) => {
  const { login, createAccount } = React.useContext(AuthContext)
  const { colors } = React.useContext(ThemeContext)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={{ flex: 1 }}>
      <Section sectionTintColor="transparent">
        <Cell
          cellContentView={
            <TextInput
              value={username}
              style={{ fontSize: 16, flex: 1 }}
              placeholder="Username"
              onChangeText={setUsername}
            />
          }
        />
        <Cell
          cellContentView={
            <TextInput
              value={password}
              style={{ fontSize: 16, flex: 1 }}
              placeholder="Password"
              onChangeText={setPassword}
            />
          }
        />
      </Section>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexGrow: 1 }}>
          <Button
            title="Login"
            color={colors.settings.active}
            onPress={async () => {
              if (!username || !password) {
                alert('Please input username and password')
                return
              }
              try {
                await login(username, password)
                navigation.goBack()
              } catch (err) {
                alert(err.message)
              }
            }}
          />
        </View>
        <View style={{ flexGrow: 1 }}>
          <Button
            title="Create account"
            color={colors.settings.active}
            onPress={async () => {
              if (!username || !password) {
                alert('Please input username and password')
                return
              }
              try {
                await createAccount(username, password)
                await login(username, password)
                navigation.goBack()
              } catch (err) {
                alert(err.message)
              }
            }}
          />
        </View>
      </View>
    </View>
  )
}

LoginScreen.navigationOptions = {
  title: 'Login',
}
